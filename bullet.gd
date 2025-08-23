extends Area3D

const BULSPEED = 20.0

func _physics_process(delta):
	position += transform.basis.z * BULSPEED * delta

func _ready():
	body_entered.connect(_on_body_entered)

func _on_body_entered(body):
	if body.is_in_group("centipede"):
		print("Segment destroyed!")
		body.queue_free() # kill only this piece
		queue_free()      # remove bullet
