import StudentCouncilCard from "../../components/common/StudentCouncilCard";

export default function AascCouncilPage() {
    return <div className="my-20 flex flex-col gap-10"> 
        <div className="text-[#853333] text-center  flex flex-col items-center gap-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase">Alumni Association Student Council</h2>
            <div className="h-1 w-[70%] lg:w-[58%]  bg-[#853333]"></div>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center md:px-10">
            <StudentCouncilCard />
            <StudentCouncilCard />
            <StudentCouncilCard />
            <StudentCouncilCard />
            <StudentCouncilCard />
            <StudentCouncilCard />
        </div>

    </div>
}