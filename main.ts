loops.forever(function on_forever() {
    agent.teleport(randpos(agent.getPosition(), pos(45, 65, 46)), SOUTH)
    agent.destroy(DOWN)
    agent.collectAll()
    [agent.dropAll(FORWARD), positions.groundPosition(pos(45, 65, 46))]
})
agent.drop(FORWARD, 5, 15)
