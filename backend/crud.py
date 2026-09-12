from sqlalchemy.orm import Session
from backend import models

def get_settings(db: Session):
    settings = db.query(models.GlobalSettings).first()
    if not settings:
        settings = models.GlobalSettings()
        db.add(settings)
        db.commit()
        db.refresh(settings)
    return settings

def update_settings(db: Session, updates: dict):
    settings = get_settings(db)
    for key, value in updates.items():
        setattr(settings, key, value)
    db.commit()
    db.refresh(settings)
    return settings

def get_scenario_log(db: Session, log_id: str):
    return db.query(models.ScenarioLog).filter(models.ScenarioLog.id == log_id).first()

def get_all_scenario_logs(db: Session):
    return db.query(models.ScenarioLog).order_by(models.ScenarioLog.created_at.desc()).all()

def create_scenario_log(db: Session, log_id: str, title: str, raw_scenario: dict, simulation_result: dict, overall_availability: float, all_targets_met: bool, total_annual_cost_usd: float):
    db_log = get_scenario_log(db, log_id)
    if db_log:
        db_log.title = title
        db_log.raw_scenario = raw_scenario
        db_log.simulation_result = simulation_result
        db_log.overall_availability = overall_availability
        db_log.all_targets_met = all_targets_met
        db_log.total_annual_cost_usd = total_annual_cost_usd
    else:
        db_log = models.ScenarioLog(
            id=log_id,
            title=title,
            raw_scenario=raw_scenario,
            simulation_result=simulation_result,
            overall_availability=overall_availability,
            all_targets_met=all_targets_met,
            total_annual_cost_usd=total_annual_cost_usd
        )
        db.add(db_log)
    db.commit()
    db.refresh(db_log)
    return db_log
