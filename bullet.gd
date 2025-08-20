extends CharacterBody3D


const BULSPEED = 20.0
@onready var collision_shape_3d = $CollisionShape3D

func _process(delta):
	position+=transform.basis * Vector3(0,0,BULSPEED) * delta
