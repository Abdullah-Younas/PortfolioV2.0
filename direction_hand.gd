extends Area3D

@export var Speed: float = 10.0
@export var steer_force: float = 15.0   # lower values = smoother turns, higher = snappier
var CanMove: bool = true
var velocity: Vector3 = Vector3.ZERO
var target: Node3D = null

func _Start(_transform: Transform3D, _target: Node3D) -> void:
	global_transform = _transform
	target = _target
	velocity = -global_transform.basis.z * Speed  # forward

func _ready() -> void:
	add_to_group("direction_arrows")

func seek() -> Vector3:
	if target:
		var desired = (target.global_position - global_position).normalized() * Speed
		var steer = (desired - velocity).normalized() * steer_force
		return steer
	return Vector3.ZERO

func _physics_process(delta: float) -> void:
	# homing force
	var steer = seek()
	velocity += steer * delta
	velocity = velocity.normalized() * Speed  # keep constant speed

	# move missile
	global_position += velocity * delta

	# rotate to face movement direction
	if velocity.length() > 0.01:
		look_at(global_position + velocity, Vector3.UP)

func _on_body_entered(body: Node) -> void:
	if body.is_in_group("Player"):
		queue_free()

func _on_life_time_timeout() -> void:
	queue_free()
