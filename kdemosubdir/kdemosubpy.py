import numpy as np

def handler(event, context):
    print("I hate ", np.pi)
    return {"message": "Successfully executed"}
