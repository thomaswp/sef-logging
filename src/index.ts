import { Blocks, Events, Extension, Snap } from 'sef';
import { BlockIDArgs } from 'sef/src/events/SnapEventListener';

export class SnapLogging extends Extension {
    init() {
        console.log("were in!");

        this.events.Trace.addGlobalListener((message: string, data: any) => {
            console.log(message, data);
        });

        this.events.addListener(new Events.Block.ClickRunListener((args: BlockIDArgs) => {
            console.log("When a block is clicked, this event is run with typed args: ", args.spec);
        }));

    }
}

const logging = new SnapLogging();
logging.register();




