from flask import Flask, render_template, request, redirect, url_for, flash, session
from models import User
from peewee import DoesNotExist

app = Flask(__name)
app.secret_key = 'sua_chave_secreta'  # Defina uma chave secreta para a sessão

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form['username']
    password = request.form['password']
    
    try:
        user = User.get(User.username == username, User.password == password)
        session['user_id'] = user.id  # Armazena o ID do usuário na sessão
        flash('Login bem-sucedido', 'success')
        return redirect(url_for('dashboard'))
    except DoesNotExist:
        flash('Credenciais inválidas', 'error')
        return redirect(url_for('home'))

@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        return 'Página de dashboard. Usuário logado!'
    else:
        flash('Faça login primeiro.', 'error')
        return redirect(url_for('home'))

@app.route('/logout')
def logout():
    session.pop('user_id', None)
    flash('Logout bem-sucedido', 'success')
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)