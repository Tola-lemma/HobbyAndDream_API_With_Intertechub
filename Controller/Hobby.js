exports.getHobby = async (req,res)=>{
      try{
            const hobbies = {
                  Reading: {
                    description: "I enjoy reading various types of materials.",
                    examples: ["Holy Bible", "Technology-related sites/books"]
                  },
                  EditingAndDesigning: {
                    description: "I like working with multimedia and design tools.",
                    tools: [
                      "Adobe Premiere Pro",
                      "YouTube Movie Maker",
                      "Adobe Illustrator",
                      "invideo design tools",
                      "Kali Linux"
                    ],
                    activities: ["Logo design", "Photo editing","Video editing","Pen testing/Ethical hacking"]
                  },
                  HelpingPeople: {
                    description: "I'm highly interested in helping people who need assistance.",
                    motivation: "Making a positive impact in others' lives."
                  },
                  Coding: {
                        description: "I enjoy creating and building projects using programming technologies.",
                        languages: ["Python", "JavaScript","..."],
                        frameworks: ["React", "Express", "Node.js","..."],
                        databases: ["PostgreSQL","MongoDB","..."],
                        stacks: ["MERN stack", "PERN stack","..."]
                  }
                };
      res.status(200).json(hobbies)
      } catch(err){
      res.status(500).send({success:false,message:'Error retrieving Data' || err.message})
      }
      }