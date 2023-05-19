import { Component, ElementRef, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'quick-panel',
    templateUrl: './quick-panel.component.html',
    styleUrls: ['./quick-panel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class QuickPanelComponent implements OnInit, OnDestroy {

    title = 'chat-ui';

    @ViewChild('chatListContainer') list?: ElementRef<HTMLDivElement>;
    chatInputMessage: string = "";
    human = {
        id: 1,
        profileImageUrl: 'assets/images/avatars/empty.jpg'
    }

     bot = {
         id: 2,
         profileImageUrl: 'assets/images/avatars/empty.jpg'
     }

    chatMessages: {
        user: any,
        message: string
    }[] = [
            {
                user: this.bot,
                message: "hi, I'm an AI. You can start any conversation..."
            },
        ];
    date: Date;
    events: any[];
    notes: any[];
    settings: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {
        // Set the defaults
        this.date = new Date();
        this.settings = {
            notify: true,
            cloud: false,
            retro: true
        };

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to the events
        this._httpClient.get('api/quick-panel-events')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response: any) => {
                this.events = response;
            });

        // Subscribe to the notes
        this._httpClient.get('api/quick-panel-notes')
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((response: any) => {
                this.notes = response;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
    ngAfterViewChecked() {
        this.scrollToBottom()
    }
    send() {
        this.chatMessages.push({
            message: this.chatInputMessage,
            user: this.human
        });

        this.chatInputMessage = ""
        this.scrollToBottom()
    }

    scrollToBottom() {
        const maxScroll = this.list?.nativeElement.scrollHeight;
        this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
    }

    generateFakeId(): string {
        const current = new Date();
        const timestamp = current.getTime();
        return timestamp.toString()
    }

    clearConversation() {

    }
}
