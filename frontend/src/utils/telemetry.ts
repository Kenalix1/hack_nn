import { Satellite } from '../types';

export function isSatelliteInShadowECI(): boolean {
  return false;
}

export function getDynamicSatelliteTelemetry(
  sat: Satellite,
  t_s: number
): Satellite {
  const baseFuelMax = sat.fuel_max_kg ?? 10.0;
  const dailyFuelConsumptionKg = 0.006;
  const timeProgress = Math.min(1.0, Math.max(0.0, t_s / 86400));
  const currentFuelUsed = dailyFuelConsumptionKg * timeProgress;
  const fuel_kg = Math.max(0.0, Number((baseFuelMax - currentFuelUsed).toFixed(3)));
  const fuel_pct = Number(((fuel_kg / baseFuelMax) * 100).toFixed(2));

  const baseTemp = sat.temperature_c ?? 38.0;
  const overheated = baseTemp >= 80.0;

  return {
    ...sat,
    temperature_c: baseTemp,
    overheated,
    fuel_kg,
    fuel_max_kg: baseFuelMax,
    fuel_pct,
    battery_pct: 100,
    is_in_sunlight: true,
    solar_power_w: 1850
  };
}
