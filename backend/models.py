from sqlalchemy import Column, Integer, String, Float, JSON, DateTime, Boolean, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from backend.database import Base

class GlobalSettings(Base):
    __tablename__ = "global_settings"
    
    id = Column(Integer, primary_key=True, index=True)
    unit_capex_usd = Column(Float, default=650000.0)
    annual_opex_per_sat_usd = Column(Float, default=45000.0)
    sla_penalty_per_client_usd = Column(Float, default=120000.0)
    processing_delay_ms = Column(Float, default=10.0)
    failure_probability = Column(Float, default=0.01) # Default 1% per day
    emergency_launch_cost_usd = Column(Float, default=15000000.0) # $15M default rocket launch cost
    launch_delay_days = Column(Integer, default=14) # 14 days delay for emergency launch

class ScenarioLog(Base):
    __tablename__ = "scenario_logs"
    
    id = Column(String, primary_key=True, index=True)
    title = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    raw_scenario = Column(JSON)
    simulation_result = Column(JSON)
    
    overall_availability = Column(Float)
    all_targets_met = Column(Boolean)
    total_annual_cost_usd = Column(Float)

# Create tables
from backend.database import engine
Base.metadata.create_all(bind=engine)
