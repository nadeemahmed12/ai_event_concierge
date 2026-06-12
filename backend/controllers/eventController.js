import Event from "../models/event.js";
import generateProposal from "../services/geminiService.js";

export async function createEvent(req,res){

    try{

        const {description}=req.body;

        const aiResponse=
        await generateProposal(description);

        const proposal=
        JSON.parse(
            aiResponse.replace(/```json|```/g,"")
        );

        const savedEvent=
        await Event.create({

            description,
            venueName:proposal.venueName,
            location:proposal.location,
            estimatedCost:proposal.estimatedCost,
            whyItFits:proposal.whyItFits
        });

        res.status(201).json(savedEvent);

    }
    catch(error){
        if(error.status === 503){
        return res.status(503).json({
            message:"Gemini is busy. Please try again later."
        });
    }

    res.status(500).json({
        message:error.message
    });
    }
}

export async function getHistory(req,res){
    const history=
    await Event.find()
    .sort({createdAt:-1});
    res.json(history);
}

