export class Patient {
  constructor(
    public drug: string,
    public type: string,
    public bleedingRisk: string,
    public creatinineClearance: string,
    public dosage: string,
    public surgDate: Date

  )
  {

  }
}
