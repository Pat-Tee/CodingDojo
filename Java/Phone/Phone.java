public abstract class Phone {
	private String versionNumber;
	private String carrier;
	private String ringTone;
	private int batteryPercentage;
//CONSTRUCTORS
	public Phone(String versionNumber, String carrier, String ringTone, int batteryPercentage) {
		this.versionNumber = versionNumber;
		this.batteryPercentage = batteryPercentage;
		this.carrier = carrier;
		this.ringTone = ringTone;
	}
//ABSTRACTS
	public abstract void displayInfo(); //implement in sub-class
//METHODS
	public String getVersionNumber() {
		return versionNumber;
	}

	public String getCarrier() {
		return carrier;
	}

	public String getRingTone() {
		return ringTone;
	}

	public int getBatteryPercentage() {
		return batteryPercentage;
	}
}
