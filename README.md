
### Görseller 

<image src="./images/task1.png">
<image src="./images/task2.png">
<image src="./images/task3.png">
<image src="./images/tas4.png">
<image src="./images/task5.png">

## Genel Olarak Projenin Yapılışı 
  
- Projede componentları olabildiğince ayırarak yapmaya çalıştım.
- İlk olarak Card componentini oluşturdum. Daha sonra sırasıyla Api, SearchBar ve Heading olarak yaptım.
- Açıldığında çok kısa olmak üzere loading ui koydum.
- Dataları axios ile getirdim.
- SearchBar'da 3 harf ve üzeri olduğunda arama yapılıyor.
- Film isimlerinin uzunluğunu standarta oturtmak için "substring" fonksiyonu kullandım. Çünkü görseller fazlasıyla kayıyordu. Projenin
  son halinde en alttaki görsellerden bazıları hala kayıyor ama onları düzene oturtamadım. OMDB Api'de her filmin görseli yoktu
  ondan da olabilir tam emin değilim.

- Projenin son hali 3 gün sürdü. Son gün ufak tefek değişiklikler yaptım. Loading, searchBar boyutu gibi.
- Biraz daha vaktim olsaydı üstte bahsettiğim gibi posterleri standarta oturtmaya vakit ayırırdım, film araması yapılıp silindikten sonra
  3.harfe kadar aramaya yapmaya devam ediyor. Ancak 3.harften aşağısında arama duruyor onu düzeltirdim.
  
  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
