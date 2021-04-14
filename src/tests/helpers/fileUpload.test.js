import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';


cloudinary.config({
    cloud_name: 'anthony92',
    api_key: '557179914827496',
    api_secret: '2zIWYvWDX-bCRG4VlPOEsHvz6BQ'
});


describe('test on fileupload', () => {
    test('should upload a file and return the url', async () => {
        const response = await fetch('https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/01/Dragon-Ball_-Chica-realiza-un-Cosplay-VS-Character-de-Milk-2.jpg?fit=1280%2C720&quality=80&ssl=1');
        const blob = await response.blob();
        const file = new File([blob], 'pic.png');
        const url = await fileUpload(file);
        console.log(url);

        expect(typeof url).toBe('string');

        //Delete img by Id
        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');
        await cloudinary.v2.api.delete_resources(imageId, {}, () => { });

    });

    test('should an error', async () => {

        const file = new File([], 'pic.png');
        const url = await fileUpload(file);
        console.log(url);

        expect(url).toBe(null);
    })

})
