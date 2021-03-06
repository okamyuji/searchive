// fetch and save
import { UseCase } from "almin";
import { UpdateSearchIndexUseCase } from "./UpdateSearchIndexUseCase";

export const fetchIndexPattern = (
    token: string
): Promise<{
    indexPatterns: string[];
}> => {
    const pass = function(response: Response): Promise<Response> {
        if (!response.ok) {
            return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response);
    };

    const headers = new Headers();
    headers.append("Authorization", token);
    return fetch(`http://localhost:12347/api/index-patterns`, {
        headers
    })
        .then(pass)
        .then(res => res.json());
};

export class RefreshSearchIndexUseCase extends UseCase {
    execute() {
        const token = require("electron").remote.getGlobal("searchiveSharedToken");
        return fetchIndexPattern(token).then(response => {
            this.context
                .useCase(new UpdateSearchIndexUseCase())
                .executor(useCase => useCase.execute(response.indexPatterns));
        });
    }
}
