from typing import Generator

import pytest
from playwright.sync_api import Playwright, APIRequestContext

BASE_URL = "http://localhost:8000/api/"


@pytest.fixture(scope="session")
def api_request_context(
    playwright: Playwright
) -> Generator[APIRequestContext, None, None]:
    headers = {
        "Content-Type": "application/json"
    }

    request_context = playwright.request.new_context(
        base_url=BASE_URL, extra_http_headers=headers
    )

    yield request_context

    request_context.dispose()


def test_should_create_user_with_success(
    api_request_context: APIRequestContext
) -> None:
    create_user_data = {
        "name": "random-user",
        "cpf": "0000000000",
        "driver_license": "000000",
        "phone_number": "000000000",
        "email": "random-user@email.com",
        "username": "test-user",
        "bio": "test bio",
        "password": "playwright"
    }

    user_created = api_request_context.post('user', data=create_user_data)

    user_response = user_created.json()

    assert user_created.ok
    assert user_response["name"] == "random-user"
    assert user_response["email"] == "random-user@email.com"


@pytest.fixture(scope="session", autouse=True)
def clear_user_records(
    api_request_context: APIRequestContext
) -> Generator[None, None, None]:
    api_request_context.delete('user')

    yield
