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
					{image : 'm04.jpg'}					
                  
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
					{image : 'wo04.jpg'}
				]
			},
			{
				nameForFeedback : 'Manwd',  //Will be used in the user feedback 
				nameForLogging : 'Manpwd', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '男性は傲慢だ'},
                    {word: '男性は子どもらしい'},
					{word: '男性は成熟している'},
                    {word: '男性は感情的だ'},
					{word: '男性は\n傲慢\nであるべきだ'},
                    {word: '男性は\n子どもらしく\nあるべきだ'},
					{word: '男性は\n成熟している\nべきだ'},
                    {word: '男性は\n感情的である\nべきだ'}
                  
				]

			}, 
			{
				nameForFeedback : 'Womanwd',  //Will be used in the user feedback 
				nameForLogging : 'Womanpwd', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word: '女性は傲慢だ'},
                    {word: '女性は子どもらしい'},
					{word: '女性は成熟している'},
                    {word: '女性は感情的だ'},
					{word: '女性は傲慢であるべきだ'},
                    {word: '女性は子どもらしくあるべきだ'},
					{word: '女性は成熟しているべきだ'},
                    {word: '女性は感情的であるべきだ'}
                  
				]

			}, 

		
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