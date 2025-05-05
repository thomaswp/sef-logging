import { Snap } from "sef/src/snap/SnapUtils";
import { EventLogger } from "../ps2/src/EventLogger";
import { EventManager, Events } from "sef";

export class PS2Logging {
    private events: EventManager;

    constructor(events: EventManager) {
        this.events = events;
    }

    init() {
        EventLogger.configure('http://localhost:8000');

        const logger = new EventLogger({
            SubjectID: 'SampleSubject',
            ToolInstances: `Snap-v${Snap.IDE.version}`,
            TempCodeStateID: 'code123',
            Order: 0,
            Attempt: 1,
        });

        this.events.addListener(new Events.Block.ClickRunListener((args) => {
        }));

        logger.sessionStart();
    }
}
