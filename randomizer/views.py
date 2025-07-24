from django.shortcuts import render
from .models import Agent
import random

def randomizer_view(request):
    agents = Agent.objects.all()
    selected_ids = []
    character = None

    if request.method == 'POST':
        selected_ids = request.POST.getlist('selected_agents')
        if selected_ids:
            selected_agents = Agent.objects.filter(id__in=selected_ids)
            character = random.choice(list(selected_agents)) if selected_agents else None

    return render(request, 'randomizer/random.html', {
        'agents': agents,
        'character': character,
        'selected_ids': selected_ids,
    })
