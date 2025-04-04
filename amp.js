define(['pipAPI', 'https://cp0131ks.github.io/amp_exp1/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Man',  //Will be used in the user feedback 
				nameForLogging : 'Man', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'm01.jPG'}, 
					{image : 'm02.jPG'},
					{image : 'm03.jPG'},
					{image : 'm04.jPG'}
				]

			}, 
			{
				nameForFeedback : 'Woman',  //Will be used in the user feedback 
				nameForLogging : 'Woman', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'wo01.jPG'}, 
					{image : 'wo02.jPG'},
					{image : 'wo03.jPG'},
					{image : 'wo04.jPG'}
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