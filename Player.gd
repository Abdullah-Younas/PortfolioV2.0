extends CharacterBody3D

const SPEED = 8.0
const GROUND_SPEED_MULT = 1.0
const AIR_SPEED_MULT = 1.5
var speed_multiplier := GROUND_SPEED_MULT

const JUMP_VELOCITY = 6.5
var JUMP_COUNT = 2
var SENS = 0.005
var gravity = ProjectSettings.get_setting("physics/3d/default_gravity")

const BOB_FREQ = 2.0
const BOB_AMP = 0.08
var t_bob = 0.0

var tilt_angle := 0.0
var tilt_speed := 5.0

# store pitch manually
var pitch := 0.0

@onready var head = $Head
@onready var camera_3d = $Head/Camera3D
@onready var rifle = $Head/Camera3D/Rifle
@onready var bullet_spawn = $Head/Camera3D/Rifle/BulletSpawn
var BUL = load("res://bullet.tscn")
func _ready():
	Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func _unhandled_input(event):
	if event is InputEventMouseMotion:
		# yaw (head left/right)
		head.rotate_y(-event.relative.x * SENS)

		# pitch (camera up/down)
		pitch -= event.relative.y * SENS
		pitch = clamp(pitch, deg_to_rad(-80), deg_to_rad(90))
		camera_3d.rotation.x = pitch

func _physics_process(delta):
	if not is_on_floor():
		speed_multiplier = AIR_SPEED_MULT
		velocity.y -= gravity * delta
	else:
		speed_multiplier = GROUND_SPEED_MULT
		JUMP_COUNT = 2

	if Input.is_action_just_pressed("JUMP") and JUMP_COUNT > 0:
		JUMP_COUNT -= 1
		velocity.y = JUMP_VELOCITY

	if Input.is_action_just_pressed("ExitDebug"):
		get_tree().quit()

	if Input.is_action_pressed("MoveLeft"):
		tilt_angle = deg_to_rad(7)
	elif Input.is_action_pressed("MoveRight"):
		tilt_angle = deg_to_rad(-7)
	else:
		tilt_angle = 0.0
		
	if Input.is_action_just_pressed("Shoot"):
		var BInst = BUL.instantiate()
		BInst.position = bullet_spawn.global_position
		BInst.transform.basis = bullet_spawn.global_transform.basis
		get_parent().add_child(BInst)


	var current_angle = camera_3d.rotation.z
	camera_3d.rotation.z = lerp(current_angle, tilt_angle, delta * tilt_speed)

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
	camera_3d.transform.origin = _headBob(t_bob / 1.5)

	move_and_slide()

func _headBob(time) -> Vector3:
	var pos = Vector3.ZERO
	pos.y = sin(time * BOB_FREQ) * BOB_AMP
	return pos
