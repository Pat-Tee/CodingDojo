public class iPhone extends Phone implements Ringable {

	public iPhone(String versionNumber,	String carrier, String ringTone, int batteryPercentage) {
		super(versionNumber, carrier, ringTone, batteryPercentage);					
	}

	@Override
	public String ring() {
		return getRingTone();	
	}

	@Override
	public String unlock() {
		return "iPhone unlocked.";
	}
	
	@Override
	public void displayInfo() {
		System.out.println("iPhone details:"
					+super.getVersionNumber()
					+" "+super.getBatteryPercentage()
					+" "+super.getCarrier()
					+" "+super.getRingTone() );
	}
	
}
