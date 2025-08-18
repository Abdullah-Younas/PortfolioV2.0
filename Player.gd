extends CharacterBody3D


const SPEED = 10.0
const GROUND_SPEED_MULT = 1.0
const AIR_SPEED_MULT = 1.5   # less control in air

var speed_multiplier := GROUND_SPEED_MULT

const JUMP_VELOCITY = 6.5
var JUMP_COUNT = 2
var SENS = 0.005
# Get the gravity from the project settings to be synced with RigidBody nodes.
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

const BOB_FREQ = 2.0
const BOB_AMP = 0.08
var t_bob = 0.0

var tilt_angle := 0.0  # target angle in radians
var tilt_speed := 5.0  # how fast to smooth

@onready var head = $Head
@onready var camera_3d = $Head/Camera3D


func _ready():
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _unhandled_input(event):
	if event is InputEventMouseMotion:
		head.rotate_y(-event.relative.x * SENS)
		camera_3d.rotate_x(-event.relative.y * SENS)
		camera_3d.rotation.x = clamp(camera_3d.rotation.x, deg_to_rad(-80), deg_to_rad(90))

func _physics_process(delta):
	# Add the gravity.
	if not is_on_floor():
		speed_multiplier = AIR_SPEED_MULT
		velocity.y -= gravity * delta
	else:
		speed_multiplier = GROUND_SPEED_MULT
		JUMP_COUNT = 2

	# Handle Jump.
	if Input.is_action_just_pressed("JUMP") and JUMP_COUNT > 0:
		JUMP_COUNT = JUMP_COUNT - 1
		velocity.y = JUMP_VELOCITY
		
	if Input.is_action_just_pressed("ExitDebug"):
		get_tree().quit()
	
	if Input.is_action_pressed("MoveLeft"):
		tilt_angle = deg_to_rad(7)
	elif Input.is_action_pressed("MoveRight"):
		tilt_angle = deg_to_rad(-7)
	else:
		tilt_angle = 0.0
	
	# smooth tilt with lerp
	var current_angle = camera_3d.rotation.z
	camera_3d.rotation.z = lerp(current_angle, tilt_angle, delta * tilt_speed)
	

	# Get the input direction and handle the movement/deceleration.
	# As good practice, you should replace UI actions with custom gameplay actions.
	var input_dir = Input.get_vector("MoveLeft", "MoveRight", "MoveForward", "MoveBackward")
	var direction = (head.transform.basis * Vector3(input_dir.x, 0, input_dir.y)).normalized()
	if is_on_floor():
		if direction:
			velocity.x = direction.x * SPEED * speed_multiplier
			velocity.z = direction.z * SPEED * speed_multiplier
		else:
			velocity.x = move_toward(velocity.x, 0, SPEED * speed_multiplier)
			velocity.z = move_toward(velocity.z, 0, SPEED * speed_multiplier)
	else:
		velocity.x = lerp(velocity.x, direction.x * SPEED * speed_multiplier, delta * 1.0)
		velocity.z = lerp(velocity.z, direction.z * SPEED * speed_multiplier, delta * 1.0)
	
	
	t_bob += delta * velocity.length() * float(is_on_floor())
	camera_3d.transform.origin = _headBob(t_bob)

	move_and_slide()

func _headBob(time) -> Vector3:
	var pos = Vector3.ZERO
	pos.y = sin(time * BOB_FREQ) * BOB_AMP
	return pos
