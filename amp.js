define(['pipAPI', 'https://cp0131ks.github.io/amp_exp1/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Manpc',  //Will be used in the user feedback 
				nameForLogging : 'Manpc', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'm01.jpg'}, 
					{image : 'm02.jpg'},
					{image : 'm03.jpg'},
					{image : 'm04.jpg'},
					{image : 'm05.jpg'}, 
					{image : 'm06.jpg'},
					{image : 'm07.jpg'},
					{image : 'm08.jpg'}					
                  
				]

			}, 
			{
				nameForFeedback : 'Womanpc',  //Will be used in the user feedback 
				nameForLogging : 'Womanpc', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {image : 'wo01.jpg'}, 
					{image : 'wo02.jpg'},
					{image : 'wo03.jpg'},
					{image : 'wo04.jpg'},
					{image : 'wo05.jpg'}, 
					{image : 'wo06.jpg'},
					{image : 'wo07.jpg'},
					{image : 'wo08.jpg'}
				]
			},
			

		
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{image : 'ampchair.JPG'}, {image : 'amplamp.JPG'}, {image : 'ampumbrella.JPG'}]
		},

		targetCats :  [
			{
				nameForFeedback : 'イ音節文字',  //Will be used in the user feedback 
				nameForLogging : 'イ音節文字', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'ꀀ'}					
                  
				]

			}

		
		],
		base_url : {//Where are your images at?
			image : 'https://cp0131ks.github.io/amp_exp1/image'
		}
	});
});