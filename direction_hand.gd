extends Node3D

@export var Speed: float = 10.0
@export var steer_force: float = 15.0   # lower values = smoother turns, higher = snappier
var CanMove: bool = true
var velocity: Vector3 = Vector3.ZERO
var target: Node3D = null
@onready var direction_hand = $DirectionHand
@onready var static_hand = $StaticHand
@onready var collision_shape_3d = $StaticHand/CollisionShape3D

func _Start(_transform: Transform3D, _target: Node3D) -> void:
	global_transform = _transform
	target = _target
	velocity = -global_transform.basis.z * Speed  # forward

func _ready() -> void:
	add_to_group("direction_arrows")
	collision_shape_3d.disabled = true  # start with collision off
	
func make_static():
	print("Turning static!")
	CanMove = false                        # stop homing
	direction_hand.queue_free()            # remove detection
	collision_shape_3d.disabled = false    # enable collision


func seek() -> Vector3:
	if target:
		var desired = (target.global_position - global_position).normalized() * Speed
		var steer = (desired - velocity).normalized() * steer_force
		return steer
	return Vector3.ZERO

func _physics_process(delta: float) -> void:
	if not CanMove:
		return   # don’t move if frozen
	# homing force
	var steer = seek()
	velocity += steer * delta
	velocity = velocity.normalized() * Speed  # keep constant speed

	# move missile
	global_position += velocity * delta

	# rotate to face movement direction
	if velocity.length() > 0.01:
		look_at(global_position + velocity, Vector3.UP)
		
func _on_life_time_timeout() -> void:
	queue_free()

func _on_direction_hand_area_entered(area):
	pass # Replace with function body.

func _on_direction_hand_body_entered(body):
	if body.is_in_group("Player"):
		queue_free()
