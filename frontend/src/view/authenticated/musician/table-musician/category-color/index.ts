export const getCategoryColor = (category: string) => {
    switch (category) {
        case "Cordas":
            return "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-300"
        case "Madeiras":
            return "bg-emerald-100 text-emerald-800 border-emerald-300 hover:bg-emerald-300"
        case "Metais":
            return "bg-amber-100 text-amber-800 border-amber-300 hover:bg-amber-300"
        default:
            return "bg-gray-100 text-gray-800"
    }
}   