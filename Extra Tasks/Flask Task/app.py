from flask import Flask;


app  = Flask(__name__);
n=""


@app.route("/store/<string:user>", methods=["GET"])
def store(user):
    global n;
    n+=user;
    return "got the String"
    

@app.route("/concat", methods=["GET"])
def concat():
    return n;


if __name__ =="__main__":
    app.run(port=8000,debug=True);