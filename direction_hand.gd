extends Area3D

# Add this to identify arrows easily
func _ready():
	# Add to a group for easy identification
	add_to_group("direction_arrows")
	
	# six rotations (in radians)
	var rotations = [
		Vector3(0, 0, 0),                        # forward
		Vector3(0, PI, 0),                       # back
		Vector3(0, -PI/2, 0),                    # left
		Vector3(0, PI/2, 0),                     # right
		Vector3(PI/2, 0, 0)                      # down (adjusted)
	]
	
	var rot = rotations[randi() % rotations.size()]
	rotation = rot
