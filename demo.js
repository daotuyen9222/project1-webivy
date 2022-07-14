const slider01 = document.querySelector('.slider01')
const slider02 = document.querySelector('.slider02')
const slider03 = document.querySelector('.slider03')
const product = document.querySelector('.product')
const productWrapHight = document.querySelector('.product_wrap')


var listProducts = [{
        "id": "SKU: 48B9175",
        "name": "ĐẦM HỌA TIẾT KẺ VAI CUT-OUT",
        "price": "1.690.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/30d037e2eaa8bf3e03106db70d75fa26.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/029666456994ea62337790b845759049.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG"

        }
    },
    {
        "id": "SKU: 48M7640",
        "name": "ĐẦM LỤA PHỐI BÈO",
        "price": "1.990.000đ",
        "des4": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/30d037e2eaa8bf3e03106db70d75fa26.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/029666456994ea62337790b845759049.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des1": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG"

        }
    },
    {
        "id": "SKU: 48M7545",
        "name": "ĐẦM LỤA LỆCH VAI",
        "price": "1.890.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/d85ad7ab3196a69c701f68783f6a083b.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/d837c3f3716ccbd08fc5da6441343e21.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG"

        }
    },
    {
        "id": "SKU: 22B9260",
        "name": "QUẦN BAGGY PHỐI ĐAI",
        "price": "1.190.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/29/882c1f80296398f42e309efe85a31387.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/29/cde094d23a57bc48f019bcbeb729e36f.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG"

        }
    },
    {
        "id": "SKU: 20T0203",
        "name": "QUẦN SOOC HỌA TIẾT KẺ",
        "price": "790.000đ",
        "des4": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/30d037e2eaa8bf3e03106db70d75fa26.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/029666456994ea62337790b845759049.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des1": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des3": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG"

        }
    },
    {
        "id": "SKU: 48M7492",
        "name": "ĐẦM VOAN PHỐI VIỀN TẠO KIỂU",
        "price": "1.990.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/30d037e2eaa8bf3e03106db70d75fa26.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/029666456994ea62337790b845759049.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG"

        }
    },
    {
        "id": "SKU: 22M7611",
        "name": "QUẦN SUÔNG DÀI CẠP TẠO KIỂU",
        "price": "1.190.000đ",
        "des4": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/30d037e2eaa8bf3e03106db70d75fa26.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/029666456994ea62337790b845759049.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des1": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/0a16726a6345ef093e10728328b60b84.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/7670516a30de4e5822cd42e944131253.JPG"

        }
    },
    {
        "id": "SKU: 47B9395",
        "name": "ĐẦM BABYDOLL TAY BỒNG",
        "price": "1.690.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/5417f5b64699195d74da5ccda0b979c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/08/1d84c3d47bcb9e2685a46572474ed740.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Nước Biển",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/7916548180073416d11feda75bf50236.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/1234d9c042f3956e2f133a3c452862fd.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Bạc Hà",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/184ec1d516ac74a8d731103d2211ee06.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/9724725ffc088b6920dbbe20200e6b92.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/a7c1f10e380ed4f28c4bc5ee452e30e5.JPG"

        }
    }

]
var listProductMen = [{
        "id": "SKU: 57E3373",
        "name": "ÁO THUN IN HÌNH",
        "price": "650.000đ",
        "des2": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des3": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des1": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    },
    {
        "id": "SKU: 57E3343",
        "name": "Màu sắc: Kẻ Bạc",
        "price": "690.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des2": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    },
    {
        "id": "SKU: 48M7545",
        "name": "ĐẦM LỤA LỆCH VAI",
        "price": "1.890.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des4": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des2": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    },
    {
        "id": "SKU: 22B9260",
        "name": "QUẦN BAGGY PHỐI ĐAI",
        "price": "1.190.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des2": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    },
    {
        "id": "SKU: 20T0203",
        "name": "QUẦN SOOC HỌA TIẾT KẺ",
        "price": "790.000đ",
        "des2": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des1": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des4": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des3": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    },
    {
        "id": "SKU: 48M7492",
        "name": "ĐẦM VOAN PHỐI VIỀN TẠO KIỂU",
        "price": "1.990.000đ",
        "des3": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des1": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des4": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des2": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    },
    {
        "id": "SKU: 22M7611",
        "name": "QUẦN SUÔNG DÀI CẠP TẠO KIỂU",
        "price": "1.190.000đ",
        "des4": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des1": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des2": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    },
    {
        "id": "SKU: 47B9395",
        "name": "ĐẦM BABYDOLL TAY BỒNG",
        "price": "1.690.000đ",
        "des4": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/95f2bad607ae78524f68461b19c648f5.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG"

        },
        "des3": {
            "color": "Màu sắc: Màu Be",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/43e14d4385dbbc1c87bbfeacd6000326.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/cb93235d27ec08e0ff2801a92f80d47c.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/e25c4940a7d14cc88c7737ffceed32ad.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/d79001635b2af011e4e8dc5f88651eab.JPG"

        },
        "des1": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/06/28/b549a9a647613a6ce98f0060ed440772.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/05/27/2c56a2a8f397870bb9e1d5bf3f51a486.JPG"

        }
    }

]
var listProductkid = [{
        "id": "SKU: 15G1483",
        "name": "SET ÁO 2 DÂY VÀ QUẦN PHỐI BÈO",
        "price": "755.000đ",
        "des2": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des3": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des1": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    },
    {
        "id": "SKU: 57E3343",
        "name": "Màu sắc: Kẻ Bạc",
        "price": "690.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des3": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des2": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    },
    {
        "id": "SKU: 48M7545",
        "name": "ĐẦM LỤA LỆCH VAI",
        "price": "1.890.000đ",
        "des2": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des4": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des1": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    },
    {
        "id": "SKU: 22B9260",
        "name": "QUẦN BAGGY PHỐI ĐAI",
        "price": "1.190.000đ",
        "des3": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des2": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des1": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    },
    {
        "id": "SKU: 20T0203",
        "name": "QUẦN SOOC HỌA TIẾT KẺ",
        "price": "790.000đ",
        "des2": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des3": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des1": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    },
    {
        "id": "SKU: 48M7492",
        "name": "ĐẦM VOAN PHỐI VIỀN TẠO KIỂU",
        "price": "1.990.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des2": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des3": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    },
    {
        "id": "SKU: 22M7611",
        "name": "QUẦN SUÔNG DÀI CẠP TẠO KIỂU",
        "price": "1.190.000đ",
        "des2": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des3": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des1": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des4": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    },
    {
        "id": "SKU: 47B9395",
        "name": "ĐẦM BABYDOLL TAY BỒNG",
        "price": "1.690.000đ",
        "des1": {
            "color": "Màu sắc: Vàng Đậm",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/567e4ab5a2183c326366da40b617cae8.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/62d0ee476c33530e422219bdb96880f1.JPG"

        },
        "des2": {
            "color": "Màu sắc: Họa tiết Nude",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/74681f507720e08a2f967d86a9f7430d.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/4732db4a407913217b4f3bd049989c91.JPG"

        },
        "des4": {
            "color": "Màu sắc: Xanh Lam Sáng",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/b3907b5a9451d966500f9424287348e6.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/1354fcc34195c3ed53a67a5f23861ee8.JPG"

        },
        "des3": {
            "color": "Màu sắc: Đen",
            "imageHover": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/dc4bb67428eb4b8485ba9d398c7d26c0.JPG",
            "image": "https://pubcdn.ivymoda.com/files/product/thumab/1600/2022/07/01/c05f8148792230a53736d0e50c3c8cba.JPG"

        }
    }

]
const html1 = listProducts.map(function(product) {
    return `
          <div class="product_slider-info">
                                        <a href="">
                                            <div class="product_logo">
                                                <div class="product_logo-seleclt select_01 active">
                                                    <img class="product_imgage" src=${product.des1.image}>
                                                    <img class="hoverimage" src=${product.des1.imageHover}>
                                                </div>
                                                <div class="product_logo-seleclt select_02">
                                                    <img class="product_imgage" src=${product.des2.image}>
                                                    <img class="hoverimage" src=${product.des2.imageHover}>
                                                </div>
                                                <div class="product_logo-seleclt select_03">
                                                    <img class="product_imgage" src=${product.des3.image}>
                                                    <img class="hoverimage" src=${product.des3.imageHover}>
                                                </div>
                                                <div class="product_logo-seleclt select_04">
                                                    <img class="product_imgage" src=${product.des4.image}>
                                                    <img class="hoverimage" src=${product.des4.imageHover}>
                                                </div>
                                                <div class="product_new">
                                                    NEW
                                                </div>
                                            </div>
                                        </a>

                                    <div class="product_info">
                                        <div class="product_info-check">
                                            <div class="product_info-select">
                                                <div class="product_info-select-01 orange active">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 sky">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 green">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 black">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                            </div>
                                            <div class="heart">
                                                <i class="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <p>${product.name}</p>
                                        <div class="product_info-price">
                                            <p>${product.price}</p>
                                            <div class="product_info-size">
                                                <i class="fa-solid fa-align-justify"></i>
                                            </div>
                                            <ul class="product_info-size-select">
                                                <li><a href="">S</a></li>
                                                <li><a href="">M</a></li>
                                                <li><a href="">L</a></li>
                                                <li><a href="">XL</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
 `
})
slider01.innerHTML = html1.join('')

const html2 = listProductMen.map(function(productMen) {
    return `
      <div class="product_slider-info">
                                    <a href="">
                                        <div class="product_logo">
                                            <div class="product_logo-seleclt select_01 active">
                                                <img class="product_imgage" src=${productMen.des1.image}>
                                                <img class="hoverimage" src=${productMen.des1.imageHover}>
                                            </div>
                                            <div class="product_logo-seleclt select_02">
                                                <img class="product_imgage" src=${productMen.des2.image}>
                                                <img class="hoverimage" src=${productMen.des2.imageHover}>
                                            </div>
                                            <div class="product_logo-seleclt select_03">
                                                <img class="product_imgage" src=${productMen.des3.image}>
                                                <img class="hoverimage" src=${productMen.des3.imageHover}>
                                            </div>
                                            <div class="product_logo-seleclt select_04">
                                                <img class="product_imgage" src=${productMen.des4.image}>
                                                <img class="hoverimage" src=${productMen.des4.imageHover}>
                                            </div>
                                            <div class="product_new">
                                                NEW
                                            </div>
                                        </div>
                                    </a>

                                    <div class="product_info">
                                        <div class="product_info-check">
                                            <div class="product_info-select">
                                                <div class="product_info-select-01 orange active">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 sky">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 green">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 black">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                            </div>
                                            <div class="heart">
                                                <i class="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <p>${productMen.name}</p>
                                        <div class="product_info-price">
                                            <p>${productMen.price}</p>
                                            <div class="product_info-size">
                                                <i class="fa-solid fa-align-justify"></i>
                                            </div>
                                            <ul class="product_info-size-select">
                                                <li><a href="">S</a></li>
                                                <li><a href="">M</a></li>
                                                <li><a href="">L</a></li>
                                                <li><a href="">XL</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
 `
})
slider02.innerHTML = html2.join('')

const html3 = listProductkid.map(function(productKid) {
    return `
      <div class="product_slider-info">
                                    <a href="">
                                        <div class="product_logo">
                                            <div class="product_logo-seleclt select_01 active">
                                                <img class="product_imgage" src=${productKid.des1.image}>
                                                <img class="hoverimage" src=${productKid.des1.imageHover}>
                                            </div>
                                            <div class="product_logo-seleclt select_02">
                                                <img class="product_imgage" src=${productKid.des2.image}>
                                                <img class="hoverimage" src=${productKid.des2.imageHover}>
                                            </div>
                                            <div class="product_logo-seleclt select_03">
                                                <img class="product_imgage" src=${productKid.des3.image}>
                                                <img class="hoverimage" src=${productKid.des3.imageHover}>
                                            </div>
                                            <div class="product_logo-seleclt select_04">
                                                <img class="product_imgage" src=${productKid.des4.image}>
                                                <img class="hoverimage" src=${productKid.des4.imageHover}>
                                            </div>
                                            <div class="product_new">
                                                NEW
                                            </div>
                                        </div>
                                    </a>

                                    <div class="product_info">
                                        <div class="product_info-check">
                                            <div class="product_info-select">
                                                <div class="product_info-select-01 orange active">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 sky">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 green">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                                <div class="product_info-select-01 black">
                                                    <i class="fa-solid fa-check"></i>
                                                </div>
                                            </div>
                                            <div class="heart">
                                                <i class="fa-solid fa-heart"></i>
                                            </div>
                                        </div>
                                        <p>${productKid.name}</p>
                                        <div class="product_info-price">
                                            <p>${productKid.price}</p>
                                            <div class="product_info-size">
                                                <i class="fa-solid fa-align-justify"></i>
                                            </div>
                                            <ul class="product_info-size-select">
                                                <li><a href="">S</a></li>
                                                <li><a href="">M</a></li>
                                                <li><a href="">L</a></li>
                                                <li><a href="">XL</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
 `
})

slider03.innerHTML = html3.join('')
const pre = document.querySelector('.pre')
const next = document.querySelector('.next')
const images = document.querySelectorAll('.slider_img')
const sliderCoverimages = document.querySelector('.slider_img-cover')

const sliderOption01 = document.querySelector('.slidermove01 .product_slider')
const sliderOption02 = document.querySelector('.slidermove02 .product_slider')
const sliderOption03 = document.querySelector('.slidermove03 .product_slider')

const productCovers01 = document.querySelectorAll('.slidermove01 .product_slider-info')
const productCovers02 = document.querySelectorAll('.slidermove02 .product_slider-info')
const productCovers03 = document.querySelectorAll('.slidermove03 .product_slider-info')


let counter = 1

const sliderLength = images.length;
const sliderItemWidth = images[0].clientWidth;



const productWwrap = document.querySelectorAll('.product_wrap')


const pre01 = document.querySelector('.pre01')
const next01 = document.querySelector('.next01')
const pre02 = document.querySelector('.pre02')
const next02 = document.querySelector('.next02')
const pre03 = document.querySelector('.pre03')
const next03 = document.querySelector('.next03')



const dotItems = document.querySelectorAll('.dot')
const idotImg = document.querySelectorAll('.idotImg')

const productSize = document.querySelectorAll('.product_info-size')
const prodctSelect = document.querySelectorAll('.product_info-size-select')
const listLogofull = document.querySelectorAll('.product_logo-seleclt')

const select01 = document.querySelectorAll('.select_01')
const select02 = document.querySelectorAll('.select_02')
const select03 = document.querySelectorAll('.select_03')
const select04 = document.querySelectorAll('.select_04')

const orange = document.querySelectorAll('.orange')
const sky = document.querySelectorAll('.sky')
const green = document.querySelectorAll('.green')
const black = document.querySelectorAll('.black')


select01.forEach(function(img1, index) {
    orange[index].addEventListener('click', function() {
        img1.parentElement.querySelector('.active').classList.remove('active')
        orange[index].parentElement.querySelector('.active').classList.remove('active')
        select01[index].classList.add('active')
        orange[index].classList.add('active')
    })

})
select02.forEach(function(img2, index) {
    sky[index].addEventListener('click', function() {
        img2.parentElement.querySelector('.active').classList.remove('active')
        sky[index].parentElement.querySelector('.active').classList.remove('active')
        select02[index].classList.add('active')
        sky[index].classList.add('active')

    })

})
select03.forEach(function(img3, index) {
    green[index].addEventListener('click', function() {
        img3.parentElement.querySelector('.active').classList.remove('active')
        green[index].parentElement.querySelector('.active').classList.remove('active')
        select03[index].classList.add('active')
        green[index].classList.add('active')

    })

})
select04.forEach(function(img4, index) {
    black[index].addEventListener('click', function() {
        img4.parentElement.parentElement.querySelector('.active').classList.remove('active')
        black[index].parentElement.querySelector('.active').classList.remove('active')
        select04[index].classList.add('active')
        black[index].classList.add('active')

    })

})

productSize.forEach(function(Size, index) {
    Size.addEventListener('click', function() {
        prodctSelect[index].classList.toggle('active')
        Size.classList.toggle('active')
    })
})

function show() {
    dotItems[counter].parentElement.querySelector('.active').classList.remove('active')
    sliderCoverimages.style.transform = ` translateX(${(-sliderItemWidth * counter)}px)`
    dotItems[counter].classList.add('active')


}
next.addEventListener('click', function() {
    if (counter >= sliderLength - 1) return;
    sliderCoverimages.style.transition = " 0.4s ease-in-out"
    counter++;
    show(counter)



})
pre.addEventListener('click', function() {
    if (counter <= 0) return;
    sliderCoverimages.style.transition = " 0.4s ease-in-out"
    counter--;
    show(counter)


})

sliderCoverimages.addEventListener("transitionend", function() {
    if (images[counter].id === 'lastclone') {
        sliderCoverimages.style.transition = "none";
        counter = images.length - 2;
        show(counter)


    }
    if (images[counter].id === 'firstClone') {
        sliderCoverimages.style.transition = "none";
        counter = images.length - counter;
        show(counter)


    }
})
images.forEach(function(image, counter) {
    dotItems[counter].addEventListener('click', function() {
        sliderCoverimages.style.transition = " 0.4s ease-in-out"
        dotItems[counter].parentElement.querySelector('.active').classList.remove('active')
        sliderCoverimages.style.transform = ` translateX(${(-sliderItemWidth * counter)}px)`
        dotItems[counter].classList.add('active')
    })
})
const screenWight = productWwrap[0].clientWidth
const productWidth = productCovers01[0].clientWidth
const productWidth02 = productCovers02[0].clientWidth
const productWidth03 = productCovers03[0].clientWidth
const productSLiderLengthOption01 = productCovers01.length
const productSLiderLengthOption02 = productCovers02.length
const productSLiderLengthOption03 = productCovers03.length

const quailyti = Math.ceil(screenWight / productWidth)
const quailyti02 = Math.ceil(screenWight / productWidth02)
const quailyti03 = Math.ceil(screenWight / productWidth03)



let number = 0

next01.addEventListener('click', function() {
    if (number == ((productSLiderLengthOption01) - 1 - quailyti)) {
        next01.classList.add('active')
    }
    number++
    pre01.classList.add('active')
    sliderOption01.style.animation = ''
    setTimeout(function() {
        sliderOption01.style.transform = ` translateX(${(-productWidth * number)}px)`
        sliderOption01.style.animation = `sliderImgMoverleft ease-in-out 0.3s `
    }, 100)
})
pre01.addEventListener('click', function() {
    if (number == 1) {
        pre01.classList.remove('active')

    }
    number--
    next01.classList.remove('active')

    sliderOption01.style.animation = ''
    setTimeout(function() {
        sliderOption01.style.transform = ` translateX(${((-productWidth * number) )}px)`
        sliderOption01.style.animation = `sliderImgMoverRight ease-in-out 0.3s `
    }, 100)
})

let number02 = 0
next02.addEventListener('click', function() {
    if (number02 == ((productSLiderLengthOption02) - 1 - quailyti02)) {
        next02.classList.add('active')
    }
    number02++
    pre02.classList.add('active')
    sliderOption02.style.animation = ''
    setTimeout(function() {
        sliderOption02.style.transform = ` translateX(${(-productWidth * number02)}px)`
        sliderOption02.style.animation = `sliderImgMoverleft ease-in-out 0.3s `
    }, 100)
})
pre02.addEventListener('click', function() {
    if (number02 == 1) {
        pre02.classList.remove('active')

    }
    number02--
    next02.classList.remove('active')

    sliderOption02.style.animation = ''
    setTimeout(function() {
        sliderOption02.style.transform = ` translateX(${((-productWidth02 * number02) )}px)`
        sliderOption02.style.animation = `sliderImgMoverRight ease-in-out 0.3s `
    }, 100)
})
let number03 = 0

next03.addEventListener('click', function() {
    if (number03 == ((productSLiderLengthOption03) - 1 - quailyti03)) {
        next03.classList.add('active')
    }
    number03++
    pre03.classList.add('active')
    sliderOption03.style.animation = ''
    setTimeout(function() {
        sliderOption03.style.transform = ` translateX(${(-productWidth03 * number03)}px)`
        sliderOption03.style.animation = `sliderImgMoverleft ease-in-out 0.3s `
    }, 100)
})
pre03.addEventListener('click', function() {
    if (number03 == 1) {
        pre03.classList.remove('active')

    }
    number03--
    next03.classList.remove('active')

    sliderOption03.style.animation = ''
    setTimeout(function() {
        sliderOption03.style.transform = ` translateX(${((-productWidth * number03) )}px)`
        sliderOption03.style.animation = `sliderImgMoverRight ease-in-out 0.3s `
    }, 100)
})


const listProduct = document.querySelectorAll('.product_title-list')
const productSliderCover = document.querySelectorAll('.product_slidermove')





listProduct.forEach(function(listItem, index) {
    listProduct[index].addEventListener('click', function() {
        listProduct[index].parentElement.querySelector('.selectactive').classList.remove('selectactive')
        listProduct[index].classList.add('selectactive')

        productSliderCover[index].parentElement.querySelector('.showw').classList.remove('showw')
        productSliderCover[index].classList.add('showw')

        productSliderCover[index].parentElement.style.transition = `all .5s ease`
    })
})

// ----------------overlay----------
const overlayList = document.querySelectorAll('.overlayselect_woman-list')
const plusbtn = document.querySelectorAll('.plus')
const minusbtn = document.querySelectorAll('.minus')
const openRights = document.querySelectorAll('.overlay_footer-open')
const closeDowns = document.querySelectorAll('.overlay_footer-down')
const overlayfooterList = document.querySelectorAll('.overlay_footer-list')

const closeBtn = document.querySelector('.overlay_close')
const overLaybar = document.querySelector('.overlaybar')
const overLay = document.querySelector('.overlay')



plusbtn.forEach(function(plus, index) {
    plusbtn[index].addEventListener('click', function() {
        plusbtn[index].parentElement.querySelector('.activiti').classList.remove('activiti')
        minusbtn[index].classList.add('activiti')
        overlayList[index].classList.add('activiti')
    })
})
minusbtn.forEach(function(minus, index) {
    minusbtn[index].addEventListener('click', function() {
        minusbtn[index].parentElement.querySelector('.activiti').classList.remove('activiti')
        plusbtn[index].classList.add('activiti')
        overlayList[index].classList.remove('activiti')

    })
})
overLaybar.addEventListener('click', function() {
    overLay.classList.add('activiti')
})
closeBtn.addEventListener('click', function() {
    overLay.classList.remove('activiti')
})
openRights.forEach(function(openright, index) {
    openRights[index].addEventListener('click', function() {
        overlayfooterList[index].classList.add('activiti')
        openRights[index].classList.add('activiti')
        closeDowns[index].classList.add('activiti')
    })
})
closeDowns.forEach(function(closeDown, index) {
    closeDowns[index].addEventListener('click', function() {
        closeDowns[index].classList.remove('activiti')
        openRights[index].classList.remove('activiti')
        overlayfooterList[index].classList.remove('activiti')


    })
})