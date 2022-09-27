
class DistanceSorter {
    static sortByCloserDistance(scans) {
        scans.sort((a, b) => a.distance - b.distance);
    }

    static sortByFurtherDistance(scans) {
        scans.sort((a, b) => b.distance - a.distance);
    }
}

module.exports = DistanceSorter;
