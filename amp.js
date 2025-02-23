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
					{image : 'b02.JPG'}, 
					{image : 'b03.JPG'}, 
					{image : 'b04.JPG'}, 
					{image : 'b05.JPG'}, 
					{image : 'b06.JPG'}, 
					{image : 'b07.JPG'}, 
					{image : 'b08.JPG'}, 
					{image : 'b09.JPG'}, 
					{image : 'b10.JPG'}, 
					{image : 'b11.JPG'}, 
					{image : 'b12.JPG'}]

			}, 
			{
				nameForFeedback : 'White people',  //Will be used in the user feedback 
				nameForLogging : 'White people', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'w01.JPG'}, 
					{image : 'w02.JPG'}, 
					{image : 'w03.JPG'}, 
					{image : 'w04.JPG'}, 
					{image : 'w05.JPG'}, 
					{image : 'w06.JPG'}, 
					{image : 'w07.JPG'}, 
					{image : 'w08.JPG'}, 
					{image : 'w09.JPG'}, 
					{image : 'w10.JPG'}, 
					{image : 'w11.JPG'}, 
					{image : 'w12.JPG'}]
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