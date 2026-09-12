import sys

with open('frontend/src/App.tsx', 'r') as f:
    lines = f.readlines()

out = []
for line in lines:
    out.append(line)
    if 'onSetCriticalSatellites={setCriticalSatellites}' in line:
        pass
    if '</DraggableWindow>' in line and 'compare' in out[-3]: # Not quite safe. Let's just find the exact line.
        pass

