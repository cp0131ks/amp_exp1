define(['pipAPI', 'https://cp0131ks.github.io/amp_exp1/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',  //Will be used in the user feedback 
				nameForLogging : 'Black people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'b01.JPG'}, 
					{image : 'b02.JPG'}
				]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'w01.JPG'}, 
					{image : 'w02.JPG'}
				]
			},
			{
				nameForFeedback : 'Yellow people',  //Will be used in the user feedback 
				nameForLogging : 'Yelow people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'y01.JPG'}, 
					{image : 'y02.JPG'}
				]
			},
			{
				nameForFeedback : 'Grey people',  //Will be used in the user feedback 
				nameForLogging : 'Grey people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'g01.JPG'}, 
					{image : 'g02.JPG'}
				]
			}

		
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.JPG'}, {image : 'amplamp.JPG'}, {image : 'ampumbrella.JPG'}]
		},

		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/amp_exp1/image'
		}
	});
});