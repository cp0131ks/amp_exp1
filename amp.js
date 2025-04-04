define(['pipAPI', 'https://cp0131ks.github.io/amp_exp1/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Man',  //Will be used in the user feedback 
				nameForLogging : 'Man', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'm01.jpg'}, 
					{image : 'm02.jpg'},
					{image : 'm03.jpg'},
					{image : 'm04.jpg'}
				]

			}, 
			{
				nameForFeedback : 'Woman',  //Will be used in the user feedback 
				nameForLogging : 'Woman', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'wo01.jpg'}, 
					{image : 'wo02.jpg'},
					{image : 'wo03.jpg'},
					{image : 'wo04.jpg'}
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