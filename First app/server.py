from flask import Flask, request, render_template
from calculator_new import total_calc, check_level, interpret_score

app = Flask(__name__)

@app.route('/complicator', methods=['GET', 'POST'])
def komplikator():
	if request.method == 'POST':
		gender = request.form['gender']
		age = request.form['age']
		status = request.form['status']
		ignorance = request.form['ignorance']
		money_have = request.form['money_have']
		money_wants = request.form['money_wants']
		popularity_online = request.form['popularity_online']
		rl_friends = request.form['rl_friends']
		nick = request.form['type_name']

		if age.isdigit() and ignorance.isdigit() and money_have.isdigit() and money_wants.isdigit() and popularity_online.isdigit() and rl_friends.isdigit():
			score = total_calc(int(age), int(gender), int(status), int(ignorance), int(money_have), int(money_wants), int(popularity_online), int(rl_friends))
			return render_template('komplikator_result.html', name = nick, complexity = score, level = check_level(score), message = interpret_score(score))
		else:
			return render_template('komplikator_error.html', message = "You have to type in numbers without any special signs ;)")
	else:
		return render_template('calc_p2.html')

@app.route('/')
def enter():
	return render_template('enter.html') 

@app.route('/home')
def home():
	return render_template('home.html')

@app.route('/test')
def test():
	return "this is just a test"

@app.route('/demo')
def demo():
	return render_template('demo.html')

@app.route('/sandbox')
def sandbox():
	return render_template('sandbox.html')

@app.route('/calc_p2')
def calc_p2():
	return render_template('calc_p2.html')

if __name__ =='__main__':
	app.run(debug = True)