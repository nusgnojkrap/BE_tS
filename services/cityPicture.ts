import { Request, Response } from "express";

const getCityPicture = async (req: Request, res: Response) => {
    const param = req.params;

    //db 조회 후 사진 return

    return res.status(200).json({
        status: 200,
        message: "사진 조회 성공",
        posting_number: param.blogId
    });
};

export { getCityPicture };