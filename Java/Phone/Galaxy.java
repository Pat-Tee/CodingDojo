public class Galaxy extends Phone implements Ringable {
	public Galaxy(String versionNumber,	String carrier, String ringTone, int batteryPercentage) {
		super(versionNumber, carrier, ringTone, batteryPercentage);	
	}

	@Override
	public String ring() {
		return getRingTone();	
	}

	@Override
	public String unlock() {
		return "Galaxy unlocked.";
	}

	@Override
	public void displayInfo() {
		System.out.println("Galaxy details: "+getVersionNumber()
						+" "+getBatteryPercentage()
						+" "+getCarrier()
						+" "+getRingTone() );
	}
}
