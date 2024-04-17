# Django-React
This repo is the tutorial for better understanding of backend (Django) and frontend (react) we will build a todo app that will perfrom crud functionality.
<h1>Dependicies to Download</h1>
<ul>
 <li>Python</li> 
 <li>django</li> 
 <li>django_rest_frmaework</li>
  <li>CORS</li>
  <li>React.js</li>
</ul>
<h1>Backend</h1>
<h2>Django features:</h2>
High-level abstraction: Django provides a high-level, abstracted approach to web development, allowing developers to focus on application logic rather than low-level details.
Admin interface: The built-in admin interface is a powerful tool for content management, allowing easy creation, update, and deletion of database records without writing custom admin panels.
URL routing: Django offers a flexible URL routing system, making it straightforward to map URLs to specific views and controllers. This feature is also helpful for developers to generate SEO-friendly URLs.
Security: Django emphasizes security, offering built-in protections against common web vulnerabilities like CSRF attacks, SQL injection, and XSS (Cross-Site Scripting).
<h2>Django benefits :</h2>
Django's high-level abstractions, built-in tools, and convention-over-configuration approach enable developers to build web applications quickly, reducing development time and effort.
Django supports horizontal scaling and load balancing, making it suitable for handling increased traffic and ensuring application growth as demands expand.
Django boasts an active and dedicated community, providing extensive documentation, tutorials, and third-party packages, making it convenient to find solutions to common challenges.
Django's REST framework extension simplifies the creation of RESTful APIs, making it a versatile choice for developing API-driven applications.
<h1>Development Phase : </h1> 
<h2>Setup : </h2>
<ul>
<li>First of all Install Python.</li>
<li>Now lets Start from Basics for backend in python Django first of all we have to create a file in the/folder in a c/drive or on f/drive where you prefer/where you keep the project.</li>
<li>Now open the folder in vs code or bash or with cmd doesn’t Matter .
Now you have create a virtual environment in it.</li>
<li>Command for virtual environment is <b>“pip install virtualenv “</b>.</li>
<li>After that you have to name the virtual environment whatever you want for which command is <b>“   virtualenv (env_name) “</b>.</li>
<li>Now we have hit activate in Scripts folder in the virtual env for this command <b>“ .\myenv\ \Scripts\Activate.ps1".</b></li>
<li>After that you have to install Django by giving Command<b> “pip install Django “</b>.</li>
<li>Now After installation you can strt project by giving it command <b>“ Django-admin startporject core” </b>.
  </li></ul>

Now you have successfully setup  the django open the backend(whatever your env folder name is) folder in vscode.
<h2>Creating an app :</h2>
<h4> Description :</h4>
<p> Basically an app act a module for a functionality e.g. if i want an authentication feature in my website than i will just create an app named authentication and will store all the featues related to the authentication in the that app hence i can reuse it wherever i want in future too.</p>
<h4>instruction :</h4>
<ul>
  <li>Command forr creating an app is <b> "django-admin startapp (app_name)
"</b></li>
  <li> After creating an app First of all you Have to Register In Installed app In <b>settings.py</b> . </li>
  <li>Now Register You app in <b>Apps.py</b>
    <br>
  <b>code for register  : </b>
      <br> <h3><b>from django.apps import AppConfig  <br>
class TodoConfig(AppConfig):   <br>
    default_auto_field = 'django.db.models.BigAutoField'
      <br>
    name = 'todo'  //app name Todo
</b></h3>

  </li>
    <li>Now hit command <b> "python manage.py runserver "</b> and your server will run on 8000 port and you can check you website on port 8000</li>
</ul>

<h2>Creating models</h2>
   <p> in Django models are Python classes that represent the structure and behavior of the data stored in a database. They provide a high-level abstraction for interacting with the database, allowing you to define the fields and relationships of your data in a simple and Pythonic way.</p>
 <b>code for creating model  : </b>
      <br> <h3><b>from django.db import models <br>
class Todo(models.Model):   <br>
    title = models.CharField(max_length=120)
      <br>
   description = models.CharField(max_length=500)
    <br>
   completed = models.BooleanField(default=False)
   <br>
   def __str__(self) :    <br>
          return self.title
</b></h3>

<h2> Registering models</h2>
In admin.py we will register our created models.. <br>
 <b>code for Registering models  : </b>
      <br> <h3><b>from django.contrib import admin <br>
        from .models import Todo <br>
class TodoAdmin(admin.ModelAdmin): <br>
      list_display=("title","description","completed")
      <br>
          admin.site.register(Todo,TodoAdmin)
</b></h3>
<h2>Creating serializer</h2>

<p> </p>

