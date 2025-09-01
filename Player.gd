extends CharacterBody3D

var SENS = 0.005
# store pitch manually
var pitch := 0.0
var yaw := 0.0
var FocusMode := false
var focus_speed := 5.0 # higher = faster snap
var Zoom_speed := 2.0
var target_zoom := 80.0 # default fov
var zoom := 80

@onready var head = $Head
@onready var camera_3d = $Head/Camera3D
@onready var fps = $FPS
@onready var low_poly_office_chair = $low_poly_office_chair
@onready var pc_mode = $PCMode

func _ready():
	add_to_group("Player")
	pc_mode.visible = false
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _unhandled_input(event):
	if event is InputEventMouseMotion and !FocusMode:
		# yaw (head + chair left/right)
		yaw -= event.relative.x * SENS
		yaw = clamp(yaw, deg_to_rad(-65), deg_to_rad(65))
		head.rotation.y = yaw
		low_poly_office_chair.rotation.y = yaw + deg_to_rad(180)  # 👈 add 180° offset

		# pitch (camera up/down, chair stays fixed)
		pitch -= event.relative.y * SENS
		pitch = clamp(pitch, deg_to_rad(-50), deg_to_rad(20))
		camera_3d.rotation.x = pitch
	
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_WHEEL_UP and event.pressed:
			target_zoom = clamp(target_zoom - 5, 20, 90)
		elif event.button_index == MOUSE_BUTTON_WHEEL_DOWN and event.pressed:
			target_zoom = clamp(target_zoom + 5, 20, 90)
			
	if Input.is_action_just_pressed("FocusComp"):
		FocusMode = true
	elif Input.is_action_just_released("FocusComp"):
		pc_mode.visible = false
		FocusMode = false

func _physics_process(delta):
	fps.text = "FPS: " + str(Engine.get_frames_per_second())
	
	if FocusMode:
		# Smooth zoom for focus mode
		zoom = lerpf(zoom, 20.0, delta * Zoom_speed)
	else:
		# Instant zoom for manual scroll
		zoom = target_zoom
	
	camera_3d.fov = zoom
	
	if Input.is_action_just_pressed("ExitDebug"):
		get_tree().quit()
		
	if FocusMode:
		# Smooth yaw → 0
		yaw = lerp_angle(yaw, 0.015, delta * focus_speed)
		head.rotation.y = yaw
		low_poly_office_chair.rotation.y = yaw + deg_to_rad(180)

		# Smooth pitch → -0.175
		pitch = lerp_angle(pitch, -0.175, delta * focus_speed)
		camera_3d.rotation.x = pitch

		# stop when close enough
		if abs(yaw - 0.015) < 0.001 and abs(pitch - -0.175) < 0.001:
			yaw = 0.015
			pitch = -0.175
			pc_mode.visible = true
