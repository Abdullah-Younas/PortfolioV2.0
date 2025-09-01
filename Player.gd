extends CharacterBody3D

var SENS = 0.005
# store pitch manually
var pitch := 0.0
var yaw := 0.0
var FocusMode := false
var focus_speed := 5.0 # higher = faster snap

@onready var head = $Head
@onready var camera_3d = $Head/Camera3D
@onready var fps = $FPS
@onready var low_poly_office_chair = $low_poly_office_chair

func _ready():
	add_to_group("Player")
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
			camera_3d.fov = clamp(camera_3d.fov - 5, 20, 120)
		elif event.button_index == MOUSE_BUTTON_WHEEL_DOWN and event.pressed:
			camera_3d.fov = clamp(camera_3d.fov + 5, 20, 120)

	if Input.is_action_just_pressed("FocusComp"):
		FocusMode = true
	elif Input.is_action_just_released("FocusComp"):
		FocusMode = false

func _physics_process(delta):
	fps.text = "FPS: " + str(Engine.get_frames_per_second())

	if Input.is_action_just_pressed("ExitDebug"):
		get_tree().quit()
		
	if FocusMode:
		# Smooth yaw → 0
		yaw = lerp_angle(yaw, 0.0, delta * focus_speed)
		head.rotation.y = yaw
		low_poly_office_chair.rotation.y = yaw + deg_to_rad(180)

		# Smooth pitch → 0
		pitch = lerp_angle(pitch, 0.0, delta * focus_speed)
		camera_3d.rotation.x = pitch

		# stop when close enough
		if abs(yaw) < 0.001 and abs(pitch) < 0.001:
			yaw = 0.0
			pitch = 0.0

