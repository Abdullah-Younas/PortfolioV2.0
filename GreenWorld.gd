extends Node3D

var DirectionArrow = load("res://direction_hand.tscn")
var SpawnPosition = Vector3(0, 0, 0)
func _ready():

	# six rotations (in radians)
	var rotations = [
		Vector3(0, 0, 0),                        # forward
		Vector3(0, PI, 0),                       # back
		Vector3(0, -PI/2, 0),                    # left
		Vector3(0, PI/2, 0),                     # right
		Vector3(0, 0, -PI/2),                    # up
		Vector3(0, 0, PI/2)                      # down
	]


	for n in 1000:
		SpawnPosition.x = randi_range(-8, 8) * 5
		SpawnPosition.y = randi_range(1, 8) * 5
		SpawnPosition.z = randi_range(-8, 8) * 5
		var DInst = DirectionArrow.instantiate()
		
		# put it clearly in front of the camera
		DInst.position = SpawnPosition
		
		# make sure it's added to THIS node, not the parent
		var rot = rotations[randi() % rotations.size()]
		DInst.rotation = rot
	
		add_child(DInst)
