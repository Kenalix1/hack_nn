class SimulationStorage:
    def __init__(self):
        self.results = []
        self.routes_cache = {}
        
    def store(self, scenario_id, result):
        self.results.append({
            "id": scenario_id,
            "k": result["k_failed"],
            "prob": result["probability"],
            "avail": result["availability"],
            "cost": result["total_cost"],
            "outage": result["max_outage_s"],
            "failed": result["failed_satellites"],
            "stage": result["stage"]
        })
        
        # In a real app we might want to store it on disk or limit cache size
        self.routes_cache[scenario_id] = result.get("routes", [])
        
    def get_routes(self, scenario_id):
        return self.routes_cache.get(scenario_id, [])
        
    def get_all_results(self):
        return self.results
