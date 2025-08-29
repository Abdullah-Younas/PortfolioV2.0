extends Area3D

@export var breakable_scene: PackedScene

func break_object():
	if breakable_scene:
		var breakable = breakable_scene.instantiate()
		get_parent().add_child(breakable)
		breakable.global_transform = global_transform
		queue_free()
