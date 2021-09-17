import numpy as np
def handler(event, context):
    print("I like ", np.pi)
    return {"message": "Successfully executed"}
