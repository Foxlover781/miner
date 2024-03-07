def on_forever():
    agent.teleport(randpos(agent.get_position(), pos(45, 65, 46)), SOUTH)
    agent.destroy(DOWN)
    agent.collect_all()
    agent.drop_all(FORWARD), positions.ground_position(pos(45, 65, 46)) 
loops.forever(on_forever)

agent.drop(FORWARD, 5, 15)