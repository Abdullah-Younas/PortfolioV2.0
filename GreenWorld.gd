extends Node3D

var DirectionArrow = load("res://direction_hand.tscn")
var SpawnPosition = Vector3.ZERO

func _ready():
	for n in 100:
		SpawnPosition.x = randi_range(-8, 8) * 5
		SpawnPosition.y = randi_range(1, 8) * 5
		SpawnPosition.z = randi_range(-8, 8) * 5
		var DInst = DirectionArrow.instantiate()
		
		# put it clearly in front of the camera
		DInst.position = SpawnPosition
	
		add_child(DInst)
