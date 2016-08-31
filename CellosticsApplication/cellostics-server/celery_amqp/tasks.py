from celery import Celery
from celery import task
import celery

#Configure celery
# celery = Celery('tasks', broker = 'amqp://guest@localhost//')
#
# @celery.tasks  # Decorator which defines the underlying function as a celery task.
# def fetch_data(json_name):
#     sleep(10)

c = celery.Celery()
c.conf.update(CELERY_ACCEPT_CONTENT = ['json'])

@task()
def add(x, y):
    return x +y

