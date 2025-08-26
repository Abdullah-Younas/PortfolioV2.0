extends Node3D

var DirectionArrow = preload("res://direction_hand.tscn")
@export var SpawnOffset: Vector3 = Vector3(0, 30, 0)
@onready var player: Node3D = $Player

func _ready():
	for i in range(10): # loop 10 times
		var DInst = DirectionArrow.instantiate()
		add_child(DInst)
		
		# random Y offset for each arrow
		var offset = SpawnOffset
		offset.x = randi_range(-20, 20)
		offset.y = randi_range(50, 70)
		offset.z = randi_range(-20, 20)
		
		# spawn arrow in front of this node with offset
		var arrow_transform = global_transform.translated(offset)
		DInst._Start(arrow_transform, player)
