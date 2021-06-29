Canvas = new fabric.Canvas("Canvas");

BlockWidth = 30;

BlockHieght = 30;

PlayerX = 10;

PlayerY = 10;

BlockObject = "";

PlayerObject = "";

function PlayerUpdate() {
    
    fabric.Image.fromURL("Avengers.png",function(Img){

        PlayerObject = Img;

        PlayerObject.ScaleToWidth(150);

        PlayerObject.ScaleToHeight(150);

        PlayerObject.set({

            top:PlayerY,

            left:PlayerX

        });

        Canvas.add(PlayerObject);

    });

}

function NewImage(GetImage) {
    
    fabric.Image.fromURL(GetImage,function(Img){

        BlockObject = Img;

        BlockObject.ScaleToWidth(150);

        BlockObject.ScaleToHeight(150);

        BlockObject.set({

            top:PlayerY,

            left:PlayerX

        });

        Canvas.add(BlockObject);

    });

}