public class ProjectTest {

	public static void main(String[] args) {

		Project aProject = new Project();

		System.out.println( aProject.getName() );
		System.out.println( aProject.getDescription() );		

		aProject.setName("Ginger");
		System.out.println("\n"+ aProject.getName() );
		
		Project bProject = new Project("Reed's", "All-Natural");

		System.out.println( "\n"+bProject.getName() );
		System.out.println( bProject.getDescription() );

		aProject.setName("Reed");
		aProject.setDescription("Craft Ginger Beer.");

		System.out.println( "\n"+aProject.getName() );
		System.out.println( aProject.getDescription() );
		
		
	}
}
