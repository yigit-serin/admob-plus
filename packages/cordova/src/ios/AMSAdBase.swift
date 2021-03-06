class AMSAdBase: NSObject {
    static var ads = [Int: Any]()
    static weak var plugin: AMSPlugin!

    var id: Int!
    var adUnitID: String!

    var plugin: AMSPlugin {
        return AMSAdBase.plugin
    }

    var commandDelegate: CDVCommandDelegate {
        return self.plugin.commandDelegate
    }

    init(id: Int, adUnitID: String) {
        super.init()

        self.id = id
        self.adUnitID = adUnitID
        AMSAdBase.ads[id] = self
    }

    deinit {
        AMSAdBase.ads.removeValue(forKey: self.id)
        self.adUnitID = nil
    }
}
